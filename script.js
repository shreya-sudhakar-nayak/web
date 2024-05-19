
function generateResume() {
  // Get user inputs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const education = document.getElementById('education').value;
  const experiance = document.getElementById('experiance').value;
  const skills = document.getElementById('skills').value;
  const languages = document.getElementById('languages').value;

  // You can add more input fields and gather their values

  // Create a PDF document
  const content = `
    <h1>${name}</h1>
    <p>Email: ${email}</p>
	<p>phone: ${phone}</p>
	<p>address: ${address}</p>
	<h1>Education</h1>
	<p>Education: ${education}</p>
	<h1>Experience</h1>
	<p>Experiance: ${experiance}</p>
	<h1>Skills</h1>
	<p>Skills: ${skills}</p>
	<h1>Languages</h1>
	<p>la: ${languages}</p>
  `;

  const element = document.createElement('div');
    element.innerHTML = content;

    html2pdf(element, {
      margin: 10,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
  }