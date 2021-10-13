
function displayResult(score, alert, btn, data) {
  const alerts = [
    {
      alert1: "0 0 2px 5px rgba(187, 4, 4, 0.5)", // color red
      alert2: "rgba(187, 4, 4, 0.5)", //color red
    },
    {
      alert1: "0 0 2px 5px rgba(187, 92, 4, 0.5)", //color orange
      alert2: "rgba(187, 92, 4, 0.5)", //color orange
    },
    {
      alert1: "0 0 2px 5px rgba(0, 209, 70, .5)", //color green
      alert2: "rgba(0, 209, 70, .5)", //color green
    },
  ];

  alert.innerHTML = score;
  const scoreId = alert.children[0].dataset.id;

  //invalid IMC print result
  if (scoreId == 'invalid') {
    alert.innerHTML = score;
    alert.style.boxShadow = "0 0 2px 5px rgba(187, 4, 4, 0.5)";; //red color alert 
  }
  // valid IMC print result 
  else {
    alerts.map((e, index) => {
      //red alert
      if (index == 0 && (scoreId == 1 || scoreId >= 5)) {

        return alert.style.boxShadow = e.alert1,
          btn.style.background = e.alert2;
      };
      //orange alert
      if (index == 1 && (scoreId == 2 || scoreId == 4)) {
        return alert.style.boxShadow = e.alert1,
          btn.style.background = e.alert2;
      };
      //green alert
      if (index == 2 && scoreId == 3) {

        return alert.style.boxShadow = e.alert1,
          btn.style.background = e.alert2;
      };
      // show info button
      btn.classList.add('show-btn');
    });
  };
};

export default displayResult;
// function displayResult(score, alert, btn, data) {
//   const alerts = {
//     alert1: "0 0 2px 5px rgba(187, 4, 4, 0.5)", // color red
//     alert2: "rgba(187, 4, 4, 0.5)", //color red
//     alert3: "0 0 2px 5px rgba(187, 92, 4, 0.5)", //color orange
//     alert4: "rgba(187, 92, 4, 0.5)", //color orange
//     alert5: "0 0 2px 5px rgba(0, 209, 70, .5)", //color green
//     alert6: "rgba(0, 209, 70, .5)", //color green
//   };

//   alert.innerHTML = score;
//   const scoreId = alert.children[0].dataset.id;
//   const imcId = data[0].scores;
//   // console.log(data.scores);
//   console.log(data);
//   console.log(imcId);
//   console.log(scoreId);

//   // const scoresTemp = data.map((x) => {
//   //   const { scores } = x
//   //   return x.scores;
//   // })

//   // console.log(scoresTemp);
//   //invalid IMC print result
//   if (scoreId == 'invalid') {
//     alert.innerHTML = score;
//     alert.style.boxShadow = "0 0 2px 5px rgba(187, 4, 4, 0.5)";; //red color alert 
//   }
//   // valid IMC print result 
//   else {
//     imcId.map((e) => {
//       if (e.id == scoreId) {
//         alert.style.boxShadow = e.alert1;
//         btn.style.background = e.alert2;

//         // show info button
//         btn.classList.add('show-btn');
//       };
//     });
//   };
// };

// export default displayResult;