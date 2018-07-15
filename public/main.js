$(document).ready(() => {


    $('.list-group').on('click', function(e) {
        e.preventDefault();
        $target = $(e.target);
        if (($target.hasClass('btn-danger')) || ($target.hasClass('glyphicon-trash'))) {
            const lastName = $target.attr('data-lastName');


            console.log(lastName);
            $.ajax({
                type: 'DELETE',
                url: '/delete/' + lastName,
                success: function(res) {
                    console.log('success');
                    window.location.href = '/';
                },
                error: function(err) {
                    console.log(this.url);
                }
            }); //end ajax delete
        } // end  if(hasClass)

        if ($target.hasClass('update')) {
            const oldName = $target.attr('data-lastName');


            console.log(oldName);
            const lastName = $target.parent().children().find('input[name="lastName"]').val();          
            const firstName = $target.parent().children().find('input[name="firstName"]').val();     
              $.ajax({
                type: 'PUT',
                url: '/update/' + oldName,
                data: { firstName: firstName, lastName: lastName },
                success: function(res) {

                    window.location.href='/';
                    console.log(this.data);
                },
                error: function(err) {
                    console.log(this.url);
                }
            });

        }

    }); // end  click on list-group

    // $('.update').on('click',function(e){
    // 	e.preventDefault();
    //    const lastName=$('#lastName').val();
    //    const firstName=$('#firstName').val();  
    // 	$.ajax({
    // 		type:'PUT',
    // 		url:'/update/'+lastName,
    // 		data:{firstName:firstName,lastName:lastName},
    // 		success:function(res){
    // 			console.log(this.data);
    // 			// window.location.href='/';
    // 		},
    // 		error:function(err){
    // 			console.log(this.url);
    // 		}
    // 	});
    //  });

});