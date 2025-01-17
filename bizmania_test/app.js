const ctx = document.getElementById('myChart');

let data = {

    Выручка: 1988919,
    Прибыль: -11246209,
    Активы:	212221164 

}

enteredData = {
    type: 'bar',
    data: {
      labels: ['День 1', 'День 2', 'День 3', 'День 4', 'День 5', 'День 6'],
      datasets: [{
        label: 'Активы',
        data: [70000000, 60000000, 50000000, 150121164, 100212164, 212221164],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
}

new Chart(ctx, enteredData);