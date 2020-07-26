exports.seed = function (knex, Promise) {
  return knex('howto').truncate()
    .then(function () {
      return knex('howto').insert([
        {
          id: 1
          , name: 'Make a sandwich'
          , description: 'How to make a PB&J sandwich'
          , steps: 'Step 1: Get 2 slices of bread. Step 2: spead peanutbutter on one slice, jelly on the other. Step 3: Combine and Enjoy!'
          , category: 'Food'
          , complexity: '5min'
        },

        {
          id: 2
          , name: 'How to change a tire'
          , description: 'How to change a tire on a car'
          , steps: 'Step 1: Place jack under vehicle and jack up until the desired tire to change is off the ground. Step 2: Remove the lug nuts from the tire. Step 3: Remove old tire and replce it with the new one. Step 4: Tighten the lug nuts. Step 5: Lower the vehicle and you are good to go!'
          , category: 'Automotive'
          , complexity: '30min'
        },
        {
          id: 3
          , name: 'Hang a shelf'
          , description: 'How to hang a simple shelf'
          , steps: 'Step 1: Determine where you would like to hand your self and using a level and tape measure draw a line and determine where to drill anchor points. Step 2: Drill anchor points and insert the drywall anchor. Step 3: Drill the supports into the anchor points. Step 4: Drill shelf to the supports'
          , category: 'Home'
          , complexity: '20min',
        },
        {
          id: 4
          , name: 'Fix a leak'
          , description: 'Simple way to fix a leaking pipe'
          , steps: 'Step 1: Turn off water to pipe. Step 2: disconnect the pipe at the leak. Step 3: clean the connection and apply tefflon tape. Step 4: reconnect pipe. Step 5: turn water back on, if still leaking repeat with plummers puddy'
          , category: 'Home'
          , complexity: '30min',
        },
        {
          id: 5,
          name: "Start a fire",
          description: "Simple way to start a fire",
          steps: "Step 1: Pile up your wood in fireplace Step 2: add lighter fluid Step 3: light a match and throw it in the lighter fluid and enjoy! ",
          category: "Home",
          complexity: "5min"
        },
      ]);
    });
};
