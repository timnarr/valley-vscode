<!-- Example from https://en.wikipedia.org/wiki/PHP -->
<?php

abstract class User
{
  public string $name;

  public function __construct(string $name)
  {
    $this->name = $name;
  }

  public function greet(): string
  {
    return "Hello, my name is " . $this->name;
  }

  abstract public function job(): string;
}

class Student extends User
{
  public string $course;

  public function __construct(string $name, string $course)
  {
    $this->course = $course;
    parent::__construct($name);
  }

  public function job(): string
  {
    return "I learn " . $this->course;
  }
}

class Teacher extends User
{
  public array $teachingCourses;

  public function __construct(string $name, string...$teachingCourses)
  {
    $this->teachingCourses = $teachingCourses;
    parent::__construct($name);
  }

  public function job(): string
  {
    return "I teach " . implode(", ", $this->teachingCourses);
  }
}

$students = [
  new Student("Alice", "Computer Science"),
  new Student("Bob", "Computer Science"),
  new Student("Charlie", "Business Studies"),
];
$teachers = [
  new Teacher("Dan", "Computer Science", "Information Security"),
  new Teacher("Erin", "Computer Science", "3D Graphics Programming"),
  new Teacher("Frankie", "Online Marketing", "Business Studies", "E-commerce"),
];

echo "Students: \n";
foreach ($students as $student) {
  echo $student->greet() . ", " . $student->job() . "\n";
}

echo "Teachers: \n";
foreach ($teachers as $teacher) {
  echo $teacher->greet() . ", " . $teacher->job() . "\n";
}

// Output of program:
// Students:
// Hello, my name is Alice, I learn Computer Science
// Hello, my name is Bob, I learn Computer Science
// Hello, my name is Charlie, I learn Business Studies
// Teachers:
// Hello, my name is Dan, I teach Computer Science, Information Security
// Hello, my name is Erin, I teach Computer Science, 3D Graphics Programming
// Hello, my name is Frankie, I teach Online Marketing, Business Studies, E-commerce
