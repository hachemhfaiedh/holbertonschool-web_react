interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};

const studentOne: Student = {
    firstName: 'Hachem',
    lastName: 'Hfaiedh',
    age: 23,
    location: 'Tunisia'
};

const studentTwo: Student = {
    firstName: 'John',
    lastName: 'Smith',
    age: 22,
    location: 'Tunisia'
};

const studentsList: Student[] = [studentOne, studentTwo];

const table: HTMLTableElement = document.createElement('table');
const tHeader: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = tHeader.insertRow(0);
const headerCellOne: HTMLTableHeaderCellElement = headerRow.insertCell(0);
headerCellOne.innerText = "firstName";
const headerCellTwo: HTMLTableHeaderCellElement = headerRow.insertCell(1);
headerCellTwo.innerText = "location";
let i: number = 1;
studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = table.insertRow(i);
    const firstName: HTMLTableCellElement = row.insertCell(0);
    firstName.innerText = student.firstName;
    const location: HTMLTableCellElement = row.insertCell(1);
    location.innerText = student.location;
    i += 1;
})

document.body.appendChild(table);
