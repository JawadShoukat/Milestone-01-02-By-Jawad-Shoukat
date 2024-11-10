function generateResume() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var linkedin = document.getElementById('linkedin').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var graduation = document.getElementById('graduation').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n        <div class=\"resume-section\">\n            <h2>".concat(firstName, " ").concat(lastName, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h3>Education</h3>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Institution:</strong> ").concat(institution, "</p>\n            <p><strong>Graduation Year:</strong> ").concat(graduation, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        </div>\n    ");
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeHTML;
    }
}
