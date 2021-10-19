class Form_process {
    constructor(form_name = "quiz", output = "result") {
        this.success ="success";
        this.output = document.getElementById("result");
        this.output.innerHTML ="Remember to answer all the questions.";
        this.response = document.forms[form_name].querySelectorAll('input');
        self.reported = false;

    };

    radio() {
        this.answers = [];
        for(var i in this.response) {// can't use this.response.forEach because obj not arr      
        try {
            let response = this.response[i];
            let {checked, value, className} = response; //destructing
            checked && this.answers.push(Number(value));// if checked is true do ans.push val with no else 
            response.className = 'judged'; 
            }
        catch {
            console.log('failure:  >', this.response[i])
            }
        };
        this.total = this.answers.reduce((a, b) => a + b); 
        this.output.innerHTML = `You got ${this.total} questions correct. <br> Check the questions to see how you did in more detail.`;

    };

    add_click(id) {
            let ele = document.getElementById(id);
            ele.addEventListener('click', clk => this.radio());
        };

};

window.onload = function() {
        let FP = new Form_process();
        FP.add_click('check');
    }


