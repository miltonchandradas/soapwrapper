const myService = {
    MyService: {
      MyServicePortType: {
        getEntity(args) {
          console.log(`Received request with entityId: ${args.entityId}`);
          return { result: `Entity with ID ${args.entityId} found` };
        },
        greet(args) {
          console.log(`Received greeting request for name: ${args.name}`);
          return { greeting: `Hello, ${args.name}!` };
        },
        getDetails(args) {
          console.log(`Received details request for id: ${args.id}`);
          // Example response
          return { field1: `Detail for ${args.id} - Field 1`, field2: `Detail for ${args.id} - Field 2` };
        },
      },
    },
  };
  
  module.exports = myService;
  