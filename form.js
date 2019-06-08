function clearName() {
        if(document.getElementById('nameField').value == 'First and Last Name') {
        document.getElementById('nameField').value = '';
    }
    }
        function clearPhone() {
        if(document.getElementById('phoneField').value == 'example: 212-123-1234') {
        document.getElementById('phoneField').value = '';
    }
    }
        function resetName() {
            if(document.getElementById('nameField').value == '') {
             document.getElementById('nameField').value = 'First and Last Name';  
               
               }
        }
        function resetPhone() {
            if(document.getElementById('phoneField').value == '') {
             document.getElementById('phoneField').value = 'example: 212-123-1234';  
               
               }
        }
        function clearEmail() {
        if(document.getElementById('emailField').value == 'example: you@yourdomain.com') {
        document.getElementById('emailField').value = '';
    }
    }
        function resetEmail() {
            if(document.getElementById('emailField').value == '') {
             document.getElementById('emailField').value = 'example: you@yourdomain.com';  
               
               }
        }
    function clearComments() {
        if(document.getElementById('commentsField').value == 'example: comments') {
        document.getElementById('commentsField').value = '';
    }
    }
        function resetComments() {
            if(document.getElementById('commentsField').value == 'Hello') {
             document.getElementById('commentsField').value = 'example: Hello';  
               
               }
        }