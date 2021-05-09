function Student(id, callBack)
{
    callBack();  
}

function StudentList() {
    document.write("Welcome to Javascript");
}
Student(1, StudentList);
