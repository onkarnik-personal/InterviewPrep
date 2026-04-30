/**
 * Problem: Employee Management System (In-Memory)
 * Platform: Cruscible — https://beta.cruscible.com/lld/employee-management-memory
 * Difficulty: Easy
 * Pattern: LLD / In-Memory Store
 *
 * Requirements:
 * - CRUD: add, get, update (partial), remove employees
 * - Multi-Index Search: by department, role, or partial name (case-insensitive)
 * - Aggregation: per-department stats (headCount, avgAge, minSalary, maxSalary, totalSalary)
 * - Promotion: atomically update an employee's role and salary
 *
 * Employee shape: { id, name, department, role, salary }
 */

class EmployeeManagementMemoryContractImpl {
    constructor() {
        this.store = new Map();
        this.deptIndex = new Map();
        this.roleIndex = new Map();
        this.counter = 0
    }

    // returns the generated id
    addEmployee(name, department, role, salary) {
        const id = `id${++this.counter}`;
        const emp = { id, name, department, role, salary };
        this.store.set(id, emp);
        if (!this.deptIndex.has(department)) {
            this.deptIndex.set(department, new Set());
        }
        this.deptIndex.get(department).add(id);
        if (!this.roleIndex.has(role)) {
            this.roleIndex.set(role, new Set());
        }
        this.roleIndex.get(role).add(id);
        return id;
    }

    getEmployee(employeeId) {
        return this.store.get(employeeId) ?? null;
    }

    // department, role, salary are optional — only update if provided
    updateEmployee(employeeId, department, role, salary) {
        const emp = this.store.get(employeeId);
        if (!emp) return false;

        if (salary !== undefined && salary !== null) emp.salary = salary;

        if (role !== undefined && role !== null) {
            this.roleIndex.get(emp.role).delete(employeeId);
            if (!this.roleIndex.has(role)) {
                this.roleIndex.set(role, new Set());
            }
            this.roleIndex.get(role).add(employeeId);
            emp.role = role;
        }

        if (department !== undefined && department !== null) {
            this.deptIndex.get(emp.department).delete(employeeId);
            if (!this.deptIndex.has(department)) {
                this.deptIndex.set(department, new Set());
            }
            this.deptIndex.get(department).add(employeeId);
            emp.department = department;
        }

        return true;
    }

    removeEmployee(employeeId) {
        const emp = this.store.get(employeeId);
        if (!emp) return false;
        this.deptIndex.get(emp.department).delete(employeeId);
        this.roleIndex.get(emp.role).delete(employeeId);
        this.store.delete(employeeId);
        return true;
    }

    getByDepartment(department) {
        const ids = Array.from(this.deptIndex.get(department) ?? new Set());
        return ids.map((id) => this.store.get(id))
    }

    getByRole(role) {
        const ids = [...this.roleIndex.get(role) ?? new Set()];
        return ids.map((id) => this.store.get(id));
    }

    getAllEmployees() {
        return [...this.store.values()]
    }
   
    getDepartmentStats(department) {
        // → {count: 2, avgSalary: 85000.0, minSalary: 75000.0, maxSalary: 95000.0, totalSalary: 170000.0}
        const all = [...this.deptIndex.get(department) ?? new Set()].map((id) => this.store.get(id));
        if(all.length === 0) return null;
        const count = all.length;
        // sorts on salary
        all.sort((a,b) => a.salary - b.salary);
        const minSalary = all[0].salary;
        const maxSalary = all[count-1].salary;
        const totalSalary = all.reduce((acc,emp) => acc + emp.salary, 0);
        const avgSalary = totalSalary/count;
        return {
            count,
            avgSalary,
            minSalary,
            maxSalary,
            totalSalary,
        }
    }

    // salaryIncrease is a delta — add it to current salary
    promoteEmployee(employeeId, newRole, salaryIncrease) {
        const emp = this.store.get(employeeId);
        if (!emp) return false;

        this.roleIndex.get(emp.role).delete(emp.id);
        if(!this.roleIndex.has(newRole)) {
            this.roleIndex.set(newRole, new Set());
        }
        this.roleIndex.get(newRole).add(emp.id);
        emp.role = newRole
        emp.salary += salaryIncrease;
        return true;
    }

    getEmployeeCount() {
        return this.store.size;
    }

    searchByName(nameQuery) {
        const query = nameQuery.toLowerCase();
        return [...this.store.values()].filter((emp) => emp.name.toLowerCase().includes(query));
    }
}

