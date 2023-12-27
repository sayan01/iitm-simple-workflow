// <!-- Example: https://seek-ode-test-env1.web.app/courses/ns_23t3_cs2007 -->
function generateLink() {
  seek_url = document.getElementById("seek_url").value;
  course_code = document.getElementById("course_code").value;
  term = document.getElementById("term").value;
  if (seek_url == "" || course_code == "" || term == "" || course_code == "0" || term == "0") {
    alert("Please fill in all fields.");
    return;
  }
  if (seek_url.slice(-1) != "/") {
    seek_url += "/";
  }
  term = term.toLowerCase();
  course_code = course_code.toLowerCase();
  link = seek_url + "courses/" + "ns_" +  term + "_" + course_code;
  window.open(link);
}

data = [{"course_code": "BSMA1001", "course_name": "Mathematics for Data Science I", "course_credits": 4, "course_type": "Theory", "course_level": 1, "course_prereq": [], "course_coreq": []}, {"course_code": "BSMA1002", "course_name": "Statistics for Data Science I", "course_credits": 4, "course_type": "Theory", "course_level": 1, "course_prereq": [], "course_coreq": []}, {"course_code": "BSCS1001", "course_name": "Computational Thinking", "course_credits": 4, "course_type": "Theory", "course_level": 1, "course_prereq": [], "course_coreq": []}, {"course_code": "BSHS1001", "course_name": "English I", "course_credits": 4, "course_type": "Theory", "course_level": 1, "course_prereq": [], "course_coreq": []}, {"course_code": "BSMA1003", "course_name": "Mathematics for Data Science II", "course_credits": 4, "course_type": "Theory", "course_level": 1, "course_prereq": ["BSMA1001"], "course_coreq": []}, {"course_code": "BSMA1004", "course_name": "Statistics for Data Science II", "course_credits": 4, "course_type": "Theory", "course_level": 1, "course_prereq": ["BSMA1002", "BSMA1001"], "course_coreq": ["BSMA1003"]}, {"course_code": "BSCS1002", "course_name": "Programming in Python", "course_credits": 4, "course_type": "Theory", "course_level": 1, "course_prereq": ["BSCS1001"], "course_coreq": []}, {"course_code": "BSHS1002", "course_name": "English II", "course_credits": 4, "course_type": "Theory", "course_level": 1, "course_prereq": ["BSHS1001"], "course_coreq": []}, {"course_code": "BSCS2001", "course_name": "Database Management Systems", "course_credits": 4, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": []}, {"course_code": "BSCS2002", "course_name": "Programming, Data Structures and Algorithms using Python", "course_credits": 4, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": []}, {"course_code": "BSCS2003", "course_name": "Modern Application Development I", "course_credits": 4, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": ["BSCS2001"]}, {"course_code": "BSCS2003P", "course_name": "Modern Application Development I - Project", "course_credits": 2, "course_type": "Project", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": ["BSCS2003"]}, {"course_code": "BSCS2005", "course_name": "Programming Concepts using Java", "course_credits": 4, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": []}, {"course_code": "BSCS2006", "course_name": "Modern Application Development II", "course_credits": 4, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSCS2003", "BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": []}, {"course_code": "BSCS2006P", "course_name": "Modern Application Development II - Project", "course_credits": 2, "course_type": "Project", "course_level": 2, "course_prereq": ["BSCS2003P", "BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": ["BSCS2006"]}, {"course_code": "BSSE2001", "course_name": "System Commands", "course_credits": 3, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": []}, {"course_code": "BSCS2004", "course_name": "Machine Learning Foundations", "course_credits": 4, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": []}, {"course_code": "BSMS2001", "course_name": "Business Data Management", "course_credits": 4, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": []}, {"course_code": "BSMS2001P", "course_name": "Business Data Management - Project", "course_credits": 2, "course_type": "Project", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": ["BSMS2001"]}, {"course_code": "BSCS2007", "course_name": "Machine Learning Techniques", "course_credits": 4, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": ["BSCS2004"]}, {"course_code": "BSCS2008", "course_name": "Machine Learning Practice", "course_credits": 4, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSCS2004", "BSCS2007", "BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": []}, {"course_code": "BSCS2008P", "course_name": "Machine Learning Practice - Project", "course_credits": 2, "course_type": "Project", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": ["BSCS2008"]}, {"course_code": "BSMS2002", "course_name": "Business Analytics", "course_credits": 4, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSMS2001", "BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": []}, {"course_code": "BSSE2002", "course_name": "Tools in Data Science", "course_credits": 3, "course_type": "Theory", "course_level": 2, "course_prereq": ["BSMA1001", "BSMA1002", "BSCS1001", "BSHS1001", "BSMA1003", "BSMA1004", "BSCS1002", "BSHS1002"], "course_coreq": ["BSCS2004"]}, {"course_code": "BSCS3001", "course_name": "Software Engineering", "course_credits": 4, "course_type": "Core Pair I", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3002"]}, {"course_code": "BSCS3002", "course_name": "Software Testing", "course_credits": 4, "course_type": "Core Pair I", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001"]}, {"course_code": "BSCS3003", "course_name": "AI: Search Methods for Problem Solving", "course_credits": 4, "course_type": "Core Pair II", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3004"]}, {"course_code": "BSCS3004", "course_name": "Deep Learning", "course_credits": 4, "course_type": "Core Pair II", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3003"]}, {"course_code": "BSGN3001", "course_name": "Strategies for Professional Growth", "course_credits": 4, "course_type": "Mandatory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": []}, {"course_code": "BSMS4002", "course_name": "Design Thinking for Data-Driven App Development", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSMS4003", "course_name": "Financial Forensics", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSMS3002", "course_name": "Market Research", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSMS4001", "course_name": "Industry 4.0", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSCS4004", "course_name": "Introduction to Big Data", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSCS4001", "course_name": "Data Visualization Design", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSCS4003", "course_name": "Privacy & Security in Online Social Media", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSEE4001", "course_name": "Speech Technology", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSCS4002", "course_name": "Reinforcement Learning", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSBT4001", "course_name": "Algorithmic Thinking in Bioinformatics", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSBT4002", "course_name": "Big Data and Biological Networks", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSMA2001", "course_name": "Mathematical Thinking", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSMA3012", "course_name": "Linear Statistical Models", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSMA3014", "course_name": "Statistical Computing", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSCS3031", "course_name": "Computer Systems Design", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001", "BSCS3005"]}, {"course_code": "BSCS3005", "course_name": "Programming in C", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSCS4022", "course_name": "Operating Systems", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS3031", "BSCS3005", "BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": ["BSCS3001", "BSCS3002", "BSCS3003", "BSCS3004", "BSGN3001"]}, {"course_code": "BSCS4021", "course_name": "Advanced Algorithms", "course_credits": 4, "course_type": "Theory", "course_level": 3, "course_prereq": ["BSCS2001", "BSCS2002", "BSCS2003", "BSCS2003P", "BSCS2005", "BSCS2006", "BSCS2006P", "BSSE2001", "BSCS2004", "BSMS2001", "BSMS2001P", "BSCS2007", "BSCS2008", "BSCS2008P", "BSMS2002", "BSSE2002"], "course_coreq": []}]

// example cs2007, CS2007 - Machine Learning Techniques
function generateCourseCodeOptions() {
  var select = document.getElementById("course_code");
  for (var i = 0; i < data.length; i++) {
    var ccode = data[i].course_code.replace(/^BS/, "");
    var cname = data[i].course_name;
    var el = document.createElement("option");
    el.textContent = ccode + " - " + cname;
    el.value = ccode;
    select.appendChild(el);
  }
}
// example 23T3, 23T3 - September Term of Year 2023
function generateTermOptions() {
  var select = document.getElementById("term");
  var start_year = 2021;
  var current_year = new Date().getFullYear();
  terms = ["January", "May", "September"];
  for(var year = start_year; year <= current_year; year++) {
    for(var i = 0; i < terms.length; i++) {
        var term = terms[i];
        var termcode = year.toString().slice(-2) + "T" + (i+1);
        var el = document.createElement("option");
        el.textContent = termcode + " - " + term + " Term of Year " + year;
        el.value = termcode;
        select.appendChild(el);
    }
  }
}

generateCourseCodeOptions();
generateTermOptions();


seek_test_url = 'https://seek-ode-test-env1.web.app/'
seek_prod_url = 'https://seek.onlinedegree.iitm.ac.in/'

btn_prod = document.getElementById("btn_prod");
btn_test = document.getElementById("btn_test");

btn_prod.onclick = () => document.getElementById("seek_url").value = seek_prod_url;
btn_test.onclick = () => document.getElementById("seek_url").value = seek_test_url;