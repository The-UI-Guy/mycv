import React from 'react';
import CompanyLogo from './CompanyLogo';


let companyName = "On The Beach";
let companyLogo = <CompanyLogo />;
let employeeOne = "Employee 1";
let employeeTwo = "Employee 2";
let employeeThree = "Employee 3";
let position = "position";
let Experience = "Job Name";




const Company = ({ text, variant }) => {
    if (variant === 'companyname') {
        return (
            <span>{companyName}</span>
        );
    }

    if (variant === 'logo') {
        return (
            {companyLogo}
        );
    }

    if (variant === 'employeeOne') {
        return (
            <span>{employeeOne}</span>
        );
    }

    if (variant === 'employeeTwo') {
        return (
            <span>{employeeTwo}</span>
        );
    }
    if (variant === 'employeeThree') {
        return (
            <span>{employeeThree}</span>
        );
    }

    if (variant === 'position') {
        return (
            <span>{position}</span>
        );
    }

    return null;
};

export default Company;