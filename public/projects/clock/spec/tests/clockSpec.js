describe("clock", function() {

    describe("#getFormattedTime", function(){
        var hours, minutes; 
        
        afterEach(function() {
            jasmine.clock().uninstall();
        });

        describe("when the current time is 2:29pm", function(){
            
            it("should return currentTime", function() {
                jasmine.clock().install();
                var baseTime = new Date(2013, 9, 23, 14, 29);
                jasmine.clock().mockDate(baseTime);
                var expectedResult = { am: false, hours: '2-hours', teenMinutes: null, tensOfMinutes: '2-tens-of-minutes', singleMinutes: '9-single-minutes' }

                expect(getFormattedTime()).toEqual(expectedResult);
            });
        });


        describe("when the current time is 4:53pm", function(){
            it("should return currentTime", function() {
                jasmine.clock().install();
                var baseTime = new Date(2013, 9, 23, 16, 53);
                jasmine.clock().mockDate(baseTime);
                var expectedResult = { am: false, hours: '4-hours', teenMinutes: null, tensOfMinutes: '5-tens-of-minutes', singleMinutes: '3-single-minutes' }

                expect(getFormattedTime()).toEqual(expectedResult);
            });
        });
    });

      

});
