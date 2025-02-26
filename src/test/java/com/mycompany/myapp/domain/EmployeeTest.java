package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.DepartmentTestSamples.*;
import static com.mycompany.myapp.domain.EmployeeTestSamples.*;
import static com.mycompany.myapp.domain.EmployeeTestSamples.*;
import static com.mycompany.myapp.domain.JobHistoryTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class EmployeeTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Employee.class);
        Employee employee1 = getEmployeeSample1();
        Employee employee2 = new Employee();
        assertThat(employee1).isNotEqualTo(employee2);

        employee2.setId(employee1.getId());
        assertThat(employee1).isEqualTo(employee2);

        employee2 = getEmployeeSample2();
        assertThat(employee1).isNotEqualTo(employee2);
    }

    @Test
    void jobHistoryTest() {
        Employee employee = getEmployeeRandomSampleGenerator();
        JobHistory jobHistoryBack = getJobHistoryRandomSampleGenerator();

        employee.addJobHistory(jobHistoryBack);
        assertThat(employee.getJobHistories()).containsOnly(jobHistoryBack);
        assertThat(jobHistoryBack.getEmployee()).isEqualTo(employee);

        employee.removeJobHistory(jobHistoryBack);
        assertThat(employee.getJobHistories()).doesNotContain(jobHistoryBack);
        assertThat(jobHistoryBack.getEmployee()).isNull();

        employee.jobHistories(new HashSet<>(Set.of(jobHistoryBack)));
        assertThat(employee.getJobHistories()).containsOnly(jobHistoryBack);
        assertThat(jobHistoryBack.getEmployee()).isEqualTo(employee);

        employee.setJobHistories(new HashSet<>());
        assertThat(employee.getJobHistories()).doesNotContain(jobHistoryBack);
        assertThat(jobHistoryBack.getEmployee()).isNull();
    }

    @Test
    void managerTest() {
        Employee employee = getEmployeeRandomSampleGenerator();
        Employee employeeBack = getEmployeeRandomSampleGenerator();

        employee.setManager(employeeBack);
        assertThat(employee.getManager()).isEqualTo(employeeBack);

        employee.manager(null);
        assertThat(employee.getManager()).isNull();
    }

    @Test
    void departmentTest() {
        Employee employee = getEmployeeRandomSampleGenerator();
        Department departmentBack = getDepartmentRandomSampleGenerator();

        employee.setDepartment(departmentBack);
        assertThat(employee.getDepartment()).isEqualTo(departmentBack);

        employee.department(null);
        assertThat(employee.getDepartment()).isNull();
    }
}
