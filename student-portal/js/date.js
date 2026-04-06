const AppData = {
  student: {
    name:       "Issah Abdul-Kudus",
    initials:   "AB",
    id:         "20210432",
    programme:  "BSc Computer Engineering",
    department: "Computer and electrical",
    level:      "200",
    year:       "Year 2",
    email:      "issahabdulkudus70@gmail.com",
    phone:      "+233 553910134",
    dob:        "May 8, 2005",
    gender:     "Male",
    nationality:"Ghanaian",
    graduation: "May 2028",
    status:     "Active",
    semester:   "2025/2026 Semester 2"
  },

  stats: {
    gpa:        "3.62",
    gpaChange:  "+0.08",
    credits:    84,
    maxCredits: 120,
    attendance: 91,
    feesBalance:"GH₵ 420",
    feesDue:    "May 1, 2026"
  },

  notifications: [
    { id:1, text:"Course registration closes April 18", time:"2 hrs ago",  read:false },
    { id:2, text:"OS Midterm result has been posted",   time:"1 day ago",  read:false },
    { id:3, text:"New announcement from Dr. Mensah",    time:"2 days ago", read:true  },
    { id:4, text:"Fee payment reminder — GH₵420 due",  time:"3 days ago", read:true  }
  ],

  courses: [
    {
      code:     "CS 301",
      name:     "Data Structures & Algorithms",
      lecturer: "Dr. Mensah Kwame",
      schedule: "MWF · 8:00 – 9:00am",
      room:     "Room CS-101",
      credits:  4,
      grade:    "A",
      progress: 70,
      dept:     "CS",
      color:    "sage"
    },
    {
      code:     "CS 312",
      name:     "Operating Systems",
      lecturer: "Dr. Eric Boateng",
      schedule: "TTh · 10:00 – 11:30am",
      room:     "Room CS-204",
      credits:  4,
      grade:    "B+",
      progress: 62,
      dept:     "CS",
      color:    "prussian"
    },
    {
      code:     "MTH 220",
      name:     "Discrete Mathematics",
      lecturer: "Prof. Acheampong",
      schedule: "MWF · 2:00 – 3:00pm",
      room:     "Room MTH-12",
      credits:  3,
      grade:    "B",
      progress: 65,
      dept:     "MTH",
      color:    "clay"
    },
    {
      code:     "ENG 215",
      name:     "Technical Writing",
      lecturer: "Ms. Abena Darko",
      schedule: "Thu · 1:00 – 3:00pm",
      room:     "Humanities Blk",
      credits:  3,
      grade:    "A-",
      progress: 78,
      dept:     "ENG",
      color:    "bone"
    }
  ],

  events: [
    { day:14, month:"Apr", title:"OS Midterm Exam",            detail:"Hall 3 · 9:00am",         type:"exam"   },
    { day:18, month:"Apr", title:"DSA Assignment 3",           detail:"Submit via portal · 11:59pm", type:"submit" },
    { day:22, month:"Apr", title:"Discrete Maths Quiz 2",      detail:"Room 204 · 2:00pm",        type:"exam"   },
    { day:25, month:"Apr", title:"Technical Writing Workshop", detail:"Library Hall · 1:00pm",    type:"class"  },
    { day:30, month:"Apr", title:"Technical Writing Final",    detail:"Hard copy + online · 4pm", type:"submit" }
  ],

  results: {
    current: {
      semester: "2025/2026 Semester 2",
      gpa: "3.62", rank: "Top 22% of class",
      cumulative: "3.54", semesters: "6 semesters",
      semCredits: 18, totalCredits: 84,
      courses: [
        { name:"Data Structures & Algorithms", code:"CS 301", credits:4, midterm:"78/100", assignment:"90/100", final:"TBA", grade:"A"  },
        { name:"Operating Systems",            code:"CS 312", credits:4, midterm:"71/100", assignment:"82/100", final:"TBA", grade:"B+" },
        { name:"Discrete Mathematics",         code:"MTH 220",credits:3, midterm:"65/100", assignment:"74/100", final:"TBA", grade:"B"  },
        { name:"Technical Writing",            code:"ENG 215",credits:3, midterm:"85/100", assignment:"88/100", final:"TBA", grade:"A-" }
      ]
    },
    previous: {
      semester: "2025/2026 Semester 1",
      courses: [
        { name:"Computer Networks",   code:"CS 310",  credits:4, score:"82/100", grade:"A-" },
        { name:"Software Engineering",code:"CS 305",  credits:4, score:"76/100", grade:"B+" },
        { name:"Linear Algebra",      code:"MTH 215", credits:3, score:"68/100", grade:"B"  },
        { name:"African Studies",     code:"GES 201", credits:3, score:"72/100", grade:"B+" }
      ]
    }
  },

  fees: {
    total:      "GH₵ 4,200",
    paid:       "GH₵ 3,780",
    balance:    "GH₵ 420",
    dueDate:    "May 1, 2026",
    history: [
      { date:"Mar 12, 2026", desc:"Tuition — Part 2",    method:"Mobile Money",  amount:"GH₵ 2,780", status:"paid" },
      { date:"Jan 08, 2026", desc:"Tuition — Part 1",    method:"Bank Transfer", amount:"GH₵ 1,000", status:"paid" },
      { date:"Dec 01, 2025", desc:"Sem. 1 — Full payment",method:"Bank Transfer",amount:"GH₵ 4,200", status:"paid" },
      { date:"May 10, 2025", desc:"Sem. 2 (2024/25)",    method:"Mobile Money",  amount:"GH₵ 4,000", status:"paid" }
    ]
  },

  schedule: {
    days: ["Mon","Tue","Wed","Thu","Fri"],
    slots: [
      { time:"8am",  day:0, code:"DSA",         full:"Data Structures",   room:"CS-101", cls:"scb-sage"    },
      { time:"8am",  day:2, code:"DSA",         full:"Data Structures",   room:"CS-101", cls:"scb-sage"    },
      { time:"8am",  day:4, code:"DSA",         full:"Data Structures",   room:"CS-101", cls:"scb-sage"    },
      { time:"10am", day:1, code:"OS",          full:"Operating Systems", room:"CS-204", cls:"scb-prussian" },
      { time:"10am", day:3, code:"OS",          full:"Operating Systems", room:"CS-204", cls:"scb-prussian" },
      { time:"2pm",  day:0, code:"Disc. Maths", full:"Discrete Maths",    room:"MTH-12", cls:"scb-clay"     },
      { time:"2pm",  day:2, code:"Disc. Maths", full:"Discrete Maths",    room:"MTH-12", cls:"scb-clay"     },
      { time:"2pm",  day:4, code:"Disc. Maths", full:"Discrete Maths",    room:"MTH-12", cls:"scb-clay"     },
      { time:"1pm",  day:3, code:"Tech Writing",full:"Technical Writing", room:"Humanities", cls:"scb-bone" }
    ],
    timeRows: ["8am","10am","1pm","2pm"]
  }
};
