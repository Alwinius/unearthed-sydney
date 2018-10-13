$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2018-10-14 15:45',
            velocity: 33,
            
        }, {
            period: '2018-10-14 15:50',
            velocity: 16,
        
        }, {
            period: '2018-10-14 15:55',
            velocity: 0,
            
        }, {
            period: '2018-10-14 16:00',
            velocity: 0,
           
        }, {
            period: '2018-10-14 16:05',
            velocity: 12,
            
        }, {
            period: '2018-10-14 16:10',
            velocity: 18,
            
        }, {
            period: '2018-10-14 16:15',
            velocity: 19,
            
        }, {
            period: '2018-10-14 16:20',
            velocity: 42,
            
        }, {
            period: '2018-10-14 16:25',
            velocity: 50,
           
        }, {
            period: '2018-10-14 16:30',
            velocity: 0,
          
        }],
        xkey: 'period',
        ykeys: ['velocity'],
        labels: ['velocity'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

   
});
