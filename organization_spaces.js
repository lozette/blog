app.directive('lsOrganizationSpaces', function() {
  "use strict";

  return {
    restrict: "E",
    replace: true,
    templateUrl: "/assets/spaces/organization_spaces.html",
    controller: "OrganizationSpacesCtrl",
    scope: {
      assoc: "@",
      method: "@",
      title: "@",
      noSpacesMessage: "@"
    }
  };
});
