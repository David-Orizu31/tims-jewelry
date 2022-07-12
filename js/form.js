var form = $("#contact");
form.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
        photo: {
            required: true,
            accept: "image/*",
        }
    }
});

form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex)
    {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinishing: function (event, currentIndex)
    {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
        form.submit();
    }
});

$('input[type="radio"][name="mineral_id"]').on('change', function () {
    var mineral = this.value;
    $('#sp').html(mineral);
    if(mineral == 'Gold') {
      $('#22k').show();
      $('#18k').show();
      $('#14k').show();
      $('#12k').show();
      $('#10k').show();
      $('#sterling').hide();
      $('#alloyed').hide();
      $('#rough').hide();
      $('#polished').hide();
      $('#expensive').hide();
      $('#tarmaline').hide();
      $('#amethylte').hide();
      $('#aquamarine').hide();
      $('#beryle').hide();
      $('#garnet').hide();
      $('#floride').hide();
      $('#goshite').hide();
      $('#topaz').hide();
      $('#chrisoberyle').hide();
      $('#othermetals').hide();
    } else if(mineral == 'Silver') {
      $('#22k').hide();
      $('#18k').hide();
      $('#14k').hide();
      $('#12k').hide();
      $('#10k').hide();
      $('#sterling').show();
      $('#alloyed').show();
      $('#rough').hide();
      $('#polished').hide();
      $('#expensive').hide();
      $('#tarmaline').hide();
      $('#amethylte').hide();
      $('#aquamarine').hide();
      $('#beryle').hide();
      $('#garnet').hide();
      $('#floride').hide();
      $('#goshite').hide();
      $('#topaz').hide();
      $('#chrisoberyle').hide();
      $('#othermetals').hide();
    } else if(mineral == 'Gemstone') {
      $('#22k').hide();
      $('#18k').hide();
      $('#14k').hide();
      $('#12k').hide();
      $('#10k').hide();
      $('#sterling').hide();
      $('#alloyed').hide();
      $('#rough').show();
      $('#polished').show();
      $('#expensive').show();
      $('#tarmaline').hide();
      $('#amethylte').hide();
      $('#aquamarine').hide();
      $('#beryle').hide();
      $('#garnet').hide();
      $('#floride').hide();
      $('#goshite').hide();
      $('#topaz').hide();
      $('#chrisoberyle').hide();
      $('#othermetals').hide();
    } else if(mineral == 'Other Metals') {
      $('#22k').hide();
      $('#18k').hide();
      $('#14k').hide();
      $('#12k').hide();
      $('#10k').hide();
      $('#sterling').hide();
      $('#alloyed').hide();
      $('#rough').hide();
      $('#polished').hide();
      $('#expensive').hide();
      $('#tarmaline').show();
      $('#amethylte').show();
      $('#aquamarine').show();
      $('#beryle').show();
      $('#garnet').show();
      $('#floride').show();
      $('#goshite').show();
      $('#topaz').show();
      $('#chrisoberyle').show();
      $('#othermetals').show();
    }
 });

 $('input[type="radio"][name="spec_id"]').on('change', function () {
   var submineral = this.value;
   $('#subminspec').html('');
   if(submineral == '22 K' || submineral == '18 K' || submineral == '14 K' || submineral == '12 K' || submineral == '10 K') {
     $('#subspec-head').html('Select '+submineral+' Category');
     $('#subminspec').append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="subspec_id" id="Yellow" value="Yellow" required><label class="form-check-label" for="Yellow">Yellow</label></div> <div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="subspec_id" id="White" value="White" required><label class="form-check-label" for="White">White</label></div> <div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="subspec_id" id="Rose" value="Rose" required><label class="form-check-label" for="Rose">Rose</label></div>');
   } else if(submineral == 'Expensive Gemstones') {
     $('#subspec-head').html('Select '+submineral+' Category');
     $('#subminspec').append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="subspec_id" id="Diamond" value="Diamond" required><label class="form-check-label" for="Diamond">Diamond</label></div> <div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="subspec_id" id="Ruby" value="Ruby" required><label class="form-check-label" for="Ruby">Ruby</label></div> <div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="subspec_id" id="Emerald" value="Emerald" required><label class="form-check-label" for="Emerald">Emerald</label></div> <div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="subspec_id" id="Sapphire" value="Sapphire" required><label class="form-check-label" for="Sapphire">Sapphire</label></div>');
   } else {
     $('#subspec-head').html('Proceed');
     $('#subminspec').append('<h5 class="text-blue">Click Next to Continue.</h5>');
   }
 });