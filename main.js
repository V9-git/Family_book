var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg",
            "https://i.postimg.cc/L6HcYQM0/grand-father.png",
             "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
             "https://image.shutterstock.com/image-vector/cute-kid-teen-boy-show-260nw-1509139481.jpg",
            "https://i.postimg.cc/JnL6wtrd/sister.jpg",
            "https://lh3.googleusercontent.com/proxy/xw7XCKZWtE6tWYtFlBR35UsWLzTsoilXP6pE7Zyh0EPqLsnwBZU9-147fRJrJ2sgrGDxjY4ThAepVO5PI3MVMlg7VrHQbJpc0XfoGMaJHa_1dz_ajrbmU5XUFZuos5QT7r1yvgi1QFm_aay_et1tgAdnOWbP"];
            var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }
