function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // JavaScript months are 0-indexed
    const year = parseInt(document.getElementById('year').value);
  
    const birthDate = new Date(year, month, day);
    const today = new Date();
  
    if (isNaN(birthDate)) {
      document.getElementById('result').textContent = "Please enter a valid date.";
      return;
    }
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
  
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    if (age < 0) {
      document.getElementById('result').textContent = "You entered a future date!";
    } else {
      document.getElementById('result').textContent = `You are ${age} year(s) old.`;
    }
  }
  
