function generateResume(): void {
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const graduation = (document.getElementById('graduation') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumeHTML = `
        <div class="resume-section">
            <h2>${firstName} ${lastName}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        </div>

        <div class="resume-section">
            <h3>Education</h3>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Institution:</strong> ${institution}</p>
            <p><strong>Graduation Year:</strong> ${graduation}</p>
        </div>

        <div class="resume-section">
            <h3>Experience</h3>
            <p>${experience}</p>
        </div>

        <div class="resume-section">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;

    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeHTML;
    }
}















