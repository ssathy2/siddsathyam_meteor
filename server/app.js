if (Meteor.isServer) {
    Meteor.startup(function () {
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("3M5Wjc9tZuiQxx87P"))
			console.log(Roles.addUsersToRoles("3M5Wjc9tZuiQxx87P", ['admin', 'blogAdmin']));   
    });
}