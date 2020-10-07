alert("WEB-TECH ASSIGNMENT : 10 \nSimple Form Validation in JS \n--AGILAN-- ");
        function validateForm() {
            var isError = false;

            var name = document.detailsForm.name_txt.value.trim();
            var name_err = document.getElementById("name_err");
            //Validation rule : name contains only alphabets and space 
            if (!(/[a-zA-Z\s]+/.test(name))) {
                isError = true;
                name_err.innerHTML = "*should contain only letters and spaces";

            } else {
                name_err.innerHTML = "";
            }

            var reg = document.detailsForm.reg_no.value;
            var reg_err = document.getElementById("reg_err");
            //Validation rule : reg_no contains 10 digits
            if (reg.length != 10) {
                isError = true;
                reg_err.innerHTML = "*should contain 10 digits";
            } else {
                reg_err.innerHTML = "";
            }

            var dob = document.detailsForm.dob.value;
            var dob_err = document.getElementById("dob_err");
            //Validation rule : STUDENT should be atleast 18 years of age
            if (!dob || new Date().getFullYear() - new Date(dob).getFullYear() < 18) {
                isError = true;
                dob_err.innerHTML = "*you should be atleast 18 years";
            } else {
                dob_err.innerHTML = "";
            }

            var gen = document.detailsForm.gender.value;
            var gen_err = document.getElementById("gender_err");
            //Validation rule : should have selected a department
            if (gen == "") {
                isError = true;
                gen_err.innerHTML = "*please select your gender";
            } else {
                gen_err.innerHTML = "";
            }

            var dep = document.detailsForm.dep_select.value;
            var dep_err = document.getElementById("dep_err");
            //Validation rule : should have selected a department
            if (dep == "") {
                isError = true;
                dep_err.innerHTML = "*please select your department";
            } else {
                dep_err.innerHTML = "";
            }

            var bld = document.detailsForm.blood_txt.value.trim();
            var bld_err = document.getElementById("blood_err");
            //Validation rule : A B O AB +ve or -ve
            if (!(/^(A|B|O|AB)[+-]$/.test(bld))) {
                isError = true;
                bld_err.innerHTML = "*Invalid Blood Group";
            } else {
                bld_err.innerHTML = "";
            }

            var mail = document.detailsForm.email_txt.value;
            var mail_err = document.getElementById("email_err");
            /*Validation rule : 
                ***This regex is just copied from the reference PDF***
                Beginning                    ^ 
                Alphabet       atleast 1     \w+               xyz
                @ character                  @                 @
                Alphabet or _  atleast 1     [a-zA-Z_]+        gmail
                . character                  \.                .
                Alphabet       2 or 3        [a-zA-Z]{2,3}     com
                End                          $
            */
            if (!(/^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/.test(mail))) {
                isError = true;
                mail_err.innerHTML = "*Invalid Email ID";
            } else {
                mail_err.innerHTML = "";
            }

            var phone = document.detailsForm.phone_no.value;
            var phone_err = document.getElementById("phone_err");
            //Validation rule : phone_no contains 10 digits
            if (phone.length != 10) {
                isError = true;
                phone_err.innerHTML = "*should contain 10 digits";
            } else {
                phone_err.innerHTML = "";
            }

            if (!(isError)) {
                alert("Your FORM is SUCCESSFULLY submitted");
                return true;
            } else return false;
        }

        function clearData() {
            document.getElementById("name_err").innerHTML="";
            document.getElementById("reg_err").innerHTML="";
            document.getElementById("dob_err").innerHTML="";
            document.getElementById("gender_err").innerHTML="";
            document.getElementById("dep_err").innerHTML="";
            document.getElementById("blood_err").innerHTML="";
            document.getElementById("email_err").innerHTML="";
            document.getElementById("phone_err").innerHTML="";
        }