$(document).ready(()=>{
	$('.list-group').on('click',function(e){
		e.preventDefault();
		$target=$(e.target);
    if($target.hasClass('btn-danger')){
		const lastName=$target.attr('data-lastName');
    console.log(lastName);
		$.ajax({
			type:'DELETE',
			url:'/delete/'+lastName,
			success:function(res){
				window.location.href='/';
			},
			error:function(err){
				console.log(this.url);
			}

		});
	}
	});

	$('.update').on('click',function(e){
		e.preventDefault();
    const lastName=$('#lastName').val();
    const firstName=$('#firstName').val();  
		$.ajax({
			type:'PUT',
			url:'/update/'+lastName,
			data:{firstName:firstName,lastName:lastName},
			success:function(res){
				console.log(this.data);
				window.location.href='/';
			},
			error:function(err){
				console.log(this.url);
			}

		});
	
	 });

});