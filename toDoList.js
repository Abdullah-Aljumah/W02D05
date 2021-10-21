const toDos = [{ name: "eat", isCompleted: true },
{ name: "code", isCompleted: true }];

const ifComplete = (i) => {
  if (toDos[i].isCompleted) {
    console.log("one");
    toDos[i].isCompleted = false;
  } else {
    console.log("two");

    toDos[i].isCompleted = true;
  }
  rinder();
};

const rinder = () => {
  $("ul").html("");
  for (let index = 0; index < toDos.length; index++) {
    $(".uList").append(`<li class='li1,'>
    <p onclick=ifComplete(${index}) class= ${
      toDos[index].isCompleted ? "line" : " "
    } >    ${toDos[index].name}   </p>
 <button class='delete,btn btn-danger'  onclick="funDelete(${index})"> Delete </button> 
<button class ='update ,btn btn-success' onclick="funEdit(${index})"> Update </button>
 </li>`);
  }
};
rinder();

const addItem = $(".btnAdd").on("click", () => {
  if ($(".input").val().trim() == false) {
    alert("Enter a value");
  } else {
    toDos.push({ name: $(".input").val(), isCompleted: false });
    rinder();
  }
});

const funDelete = (i) => {
  toDos.splice(i, 1);
  rinder();
};

const funEdit = (i) => {
  text1 = prompt("Enter your update");
  if (text1.trim() == false) {
    alert("Enter a value");
  } else {
    toDos.splice(i, 1, { name: text1, isCompleted: false });
  }
  rinder();
};

$(".clearBtn").on("click", () => {
  toDos.length = 0;
  rinder();
});

const funCompelteTask = (item) => {
  if (item.isCompleted == true) {
    return funDelete(item);
  }
  rinder();
};

$(".clearBtnComleted").on("click", () => {
  toDos.filter(funCompelteTask);
  rinder();
});
