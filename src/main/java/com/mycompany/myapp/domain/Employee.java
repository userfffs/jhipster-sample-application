package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

/**
 * A Employee.
 */
@Entity
@Table(name = "employee")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Employee implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "first_name", nullable = false)
    private String firstName;

    @NotNull
    @Column(name = "last_name", nullable = false)
    private String lastName;

    @NotNull
    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @NotNull
    @Column(name = "hire_date", nullable = false)
    private Instant hireDate;

    @Column(name = "salary")
    private Long salary;

    @Column(name = "commission_pct")
    private Long commissionPct;

    @Column(name = "job_title")
    private String jobTitle;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "employee")
    @JsonIgnoreProperties(value = { "job", "department", "employee" }, allowSetters = true)
    private Set<JobHistory> jobHistories = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "jobHistories", "manager", "department" }, allowSetters = true)
    private Employee manager;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "location", "employees" }, allowSetters = true)
    private Department department;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Employee id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public Employee firstName(String firstName) {
        this.setFirstName(firstName);
        return this;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public Employee lastName(String lastName) {
        this.setLastName(lastName);
        return this;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return this.email;
    }

    public Employee email(String email) {
        this.setEmail(email);
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public Employee phoneNumber(String phoneNumber) {
        this.setPhoneNumber(phoneNumber);
        return this;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Instant getHireDate() {
        return this.hireDate;
    }

    public Employee hireDate(Instant hireDate) {
        this.setHireDate(hireDate);
        return this;
    }

    public void setHireDate(Instant hireDate) {
        this.hireDate = hireDate;
    }

    public Long getSalary() {
        return this.salary;
    }

    public Employee salary(Long salary) {
        this.setSalary(salary);
        return this;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public Long getCommissionPct() {
        return this.commissionPct;
    }

    public Employee commissionPct(Long commissionPct) {
        this.setCommissionPct(commissionPct);
        return this;
    }

    public void setCommissionPct(Long commissionPct) {
        this.commissionPct = commissionPct;
    }

    public String getJobTitle() {
        return this.jobTitle;
    }

    public Employee jobTitle(String jobTitle) {
        this.setJobTitle(jobTitle);
        return this;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public Set<JobHistory> getJobHistories() {
        return this.jobHistories;
    }

    public void setJobHistories(Set<JobHistory> jobHistories) {
        if (this.jobHistories != null) {
            this.jobHistories.forEach(i -> i.setEmployee(null));
        }
        if (jobHistories != null) {
            jobHistories.forEach(i -> i.setEmployee(this));
        }
        this.jobHistories = jobHistories;
    }

    public Employee jobHistories(Set<JobHistory> jobHistories) {
        this.setJobHistories(jobHistories);
        return this;
    }

    public Employee addJobHistory(JobHistory jobHistory) {
        this.jobHistories.add(jobHistory);
        jobHistory.setEmployee(this);
        return this;
    }

    public Employee removeJobHistory(JobHistory jobHistory) {
        this.jobHistories.remove(jobHistory);
        jobHistory.setEmployee(null);
        return this;
    }

    public Employee getManager() {
        return this.manager;
    }

    public void setManager(Employee employee) {
        this.manager = employee;
    }

    public Employee manager(Employee employee) {
        this.setManager(employee);
        return this;
    }

    public Department getDepartment() {
        return this.department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Employee department(Department department) {
        this.setDepartment(department);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Employee)) {
            return false;
        }
        return getId() != null && getId().equals(((Employee) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Employee{" +
            "id=" + getId() +
            ", firstName='" + getFirstName() + "'" +
            ", lastName='" + getLastName() + "'" +
            ", email='" + getEmail() + "'" +
            ", phoneNumber='" + getPhoneNumber() + "'" +
            ", hireDate='" + getHireDate() + "'" +
            ", salary=" + getSalary() +
            ", commissionPct=" + getCommissionPct() +
            ", jobTitle='" + getJobTitle() + "'" +
            "}";
    }
}
