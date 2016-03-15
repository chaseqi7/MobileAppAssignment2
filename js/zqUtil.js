/**
 * Created by qizim on 2016-03-06.
 */
function getAllRating(quality,service,value) {
    var allRating =parseInt((parseInt(quality)+parseInt(service)+parseInt(value))*100/15);
    return allRating;
}

function doValidate_ZQFrmAdd(){
    var form = $("#ZQFrmAdd");
    form.validate({
        rules:{
            zqTxtName:{
                required:true,
                rangelength:[2,30]
            },
            zqTxtEmail:{
                required: true,
                email: true
            },
            zqDateReview:{
                required:true
            },
            zqNumFoodRating:{
                rateCheck:true
            },
            zqNumServRating:{
                rateCheck:true
            },
            zqNumValueRating:{
                rateCheck:true
            }

        },
        messages:{
            zqTxtName:{
                required:"You must enter a name",
                rangelength:"Name must be 2-30 characters long"
            },
            zqTxtEmail:{
                required: "You must enter an email",
                email: "Please enter a valid email address"
            },
            zqDateReview:{
                required:"Review date is required"
            },
            zqNumFoodRating:{
                rateCheck:"Value must be 0-5"
            },
            zqNumServRating:{
                rateCheck:"Value must be 0-5"
            },
            zqNumValueRating:{
                rateCheck:"Value must be 0-5"
            }
        }
    });

    return form.valid();
}


function doValidate_ZQFrmEdit(){
    var form = $("#ZQFrmEdit");
    form.validate({
        rules:{
            zqTxtEditName:{
                required:true,
                rangelength:[2,30]
            },
            zqTxtEditEmail:{
                required: true,
                email: true
            },
            zqDateEditReview:{
                required:true
            },
            zqNumEditFoodRating:{
                editRateCheck:true
            },
            zqNumEditServRating:{
                editRateCheck:true
            },
            zqNumEditValueRating:{
                editRateCheck:true
            }
        },
        messages:{
            zqTxtEditName:{
                required:"You must enter a name",
                rangelength:"Name must be 2-30 characters long"
            },
            zqTxtEditEmail:{
                required: "You must enter an email",
                email: "Please enter a valid email address"
            },
            zqDateEditReview:{
                required:"Review date is required"
            },
            zqNumEditFoodRating:{
                editRateCheck:"Value must be 0-5"
            },
            zqNumEditServRating:{
                editRateCheck:"Value must be 0-5"
            },
            zqNumEditValueRating:{
                editRateCheck:"Value must be 0-5"
            }
        }
    });

    return form.valid();
}

jQuery.validator.addMethod("rateCheck", function(value, element){
        if($("#zqCbAddRating").checked=true){
            var rate = value;
            if (rate>=0&&rate<=5) {
                return true;
            }
            return false;
        }
        else{
            return true;
        }
    },
    "Value must be 0-5");

jQuery.validator.addMethod("editRateCheck", function(value, element){
        if($("#zqCbEditAddRating").checked=true){
            var rate = value;
            if (rate>=0&&rate<=5) {
                return true;
            }
            return false;
        }
        else{
            return true;
        }
    },
    "Value must be 0-5");