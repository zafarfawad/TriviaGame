

var emptyQuestion = [];
var emptyChoices = [];
var emptyAnswers = [];
var answer ;


var queryURL = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";


$.ajax({
    url: queryURL,
    method: 'GET'
}).done(function (response) {
    // console.log(response.results[0]);

    var quizResponse = response.results;
//
//     // for (i = 0; i < quizResponse.length; i++) {
// var i = 0;
//         var quizChoices = quizResponse[i].incorrect_answers;
//         var question = quizResponse[i].question;
//         var answer = quizResponse[i].correct_answer;
//
//         emptyQuestion.push(question);
//         quizChoices.push(answer);
//         console.log(quizChoices);
//         $("#question").html(emptyQuestion[i]);
//         $("#choice1").append(quizChoices[0])
//         $("#choice2").append(quizChoices[1]);
//         $("#choice3").append(quizChoices[2]);
//         $("#choice4").append(quizChoices[3]);
//     // }
//
//
//
//
//     console.log(emptyQuestion[0]);

    showQuestions(quizResponse[0]);


});
function validateAnswer(){

}


function showQuestions(question){

    // for (i = 0; i < quizResponse.length; i++) {
    var i = 0;
    var quizChoices = question.incorrect_answers;
    var question1 = question.question;
        answer = question.correct_answer;

    emptyQuestion.push(question1);
    quizChoices.push(answer);
    console.log(quizChoices);
    $("#question").html(emptyQuestion[i]);
    $("#choice1").append(quizChoices[0])
    $("#choice2").append(quizChoices[1]);
    $("#choice3").append(quizChoices[2]);
    $("#choice4").append(quizChoices[3]);
    // }




    console.log(emptyQuestion[0]);

}

    // $("button").on("click", function () {
    //
    //     function ArrayPlusDelay(array, delegate, delay) {
    //         var j = 0
    //
    //         // seed first call and store interval (to clear later)
    //         var interval = setInterval(function () {
    //             // each loop, call passed in function
    //             delegate(emptyQuestion[j]);
    //
    //             // increment, and if we're past array, clear interval
    //             if (j++ >= emptyQuestion.length - 1)
    //                 clearInterval(interval);
    //         }, delay)
    //
    //         return interval
    //     }
    //
    //     var inter = ArrayPlusDelay(emptyQuestion, function (obj) {
    //         console.log(obj)
    //     }, 1000)
    // });



//     setTimeout(fiveSeconds, 1000 * 5);

//     var j = 0
//     // setInterval(function ()
//     function fiveSeconds() {


//         $("#question").html(emptyQuestion[j++])
//         if (j == emptyQuestion.length) j = 0


//     }

// // });
//     // , 1000);

// // });


//         for (j = 0; j < emptyQuestion.length; j++) {
//             $(".containter").append(emptyQuestion[j])
//         }

//    


//     console.log(emptyQuestion);
//     console.log(emptyAnswers);



// });


// var title = ['Orange', 'Apple', 'Mango', 'Airplane', 'Kiwi'];

// var i = 0; // the index of the current item to show

// setInterval(function () { // setInterval makes it run repeatedly
//     document
//         .getElementById('fruit')
//         .innerHTML = title[i++]; // get the item and increment
//     if (i == title.length) i = 0; // reset to first element if you've reached the end
// }, 1000);





// var questions = {
//         question: ["what is your name ? ", "what is your last name ? "],
//         answers1: ["zafar", "corsa", "snyder", "layton"],
//         answers2: ["zafar", "asmar", "snyder", "layton"],

//         correctAnswer1: "fawad",
//         correctAnswer2: "snyder"
//     }


//     $("button").on("click", function () {


//     for (i = 0 ; i< 1; i++){
//         console.log(questions.question[i])
//         emptyQuestion.push(questions.question[i])    
//         $(".question").append(questions.question[i])
//     }

// });