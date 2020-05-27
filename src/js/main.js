// Profile Image for activity stream (Circle) -------------------------------------------------------------------------------
const profileImage = function currentStatus(props) {

  let imgString =  props.contentValue;
  console.log(imgString);
  if (imgString.length > 0 ) {
    return React.createElement("img", {
      class: "profile-img",
      src: imgString
    });

  }
  return null;
};


//  Status Icon based on String Value ----------------------------------------------------------------------------------------
const taskStatus = function taskStatus(props) {
  if ((props.contentValue) === 'green' ) {

    return(

      React.createElement('span', { title: "Status Green", className: 'status-green glyphicon glyphicon-ok-circle' } )

    );
  } else if ((props.contentValue) === 'yellow' ) {
    return(

      React.createElement('span', {  title: "Status Yellow", className: 'status-yellow glyphicon glyphicon-exclamation-sign' } )

    );

  } else if ((props.contentValue) === 'red' ) {
    return(

      React.createElement('span', { title: "Status Red", className: 'status-red glyphicon glyphicon-remove-sign' } )

    );

  }
  return null
};

manywho.component.register('task-status', taskStatus);


//Prevents small table from  triggering
manywho.component.register('mw-table-small', manywho.component.getByName('mw-table-large'));

