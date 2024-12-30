document.addEventListener("DOMContentLoaded", () => {
  const TimeOff = document.getElementById("Time-Off");
  const priorityRow = document.getElementById("priorityRow");
  // 初始化：默认隐藏优先序
  priorityRow.style.display = "none";

  // 监听假别选择
  TimeOff.addEventListener("change", () => {
    if (TimeOff.value === "加班") {
      priorityRow.style.display = "block"; // 显示优先序
    } else {
      priorityRow.style.display = "none"; // 隐藏优先序
    }
  });

  const agent = document.getElementById("agent");
  const agentPerson = document.querySelectorAll(".agent-person select");
  console.log(agentPerson);

  // 初始化时隐藏所有 select 元素
  agentPerson.forEach((select) => {
    select.style.display = "none";
  });

  // 当 agent 的值改变时
  agent.addEventListener("change", () => {
    const selectedAgent = agent.value;

    // 先隐藏所有的 select 元素
    agentPerson.forEach((select) => {
      select.style.display = "none";
    });

    // 根据选中的值显示对应的 select 元素
    switch (selectedAgent) {
      case "BE":
        document.getElementById("BE").style.display = "block";
        break;
      case "FE":
        document.getElementById("FE").style.display = "block";
        break;
      case "INFRA":
        document.getElementById("INFRA").style.display = "block";
        break;
      case "DBA":
        document.getElementById("DBA").style.display = "block";
        break;
      case "QA":
        document.getElementById("QA").style.display = "block";
        break;
      case "PM":
        document.getElementById("PM").style.display = "block";
        break;
      default:
        // 如果没有匹配值，所有 select 继续隐藏
        break;
    }
  });
});

//按下送出後，將輸入資料轉物件，第一步先取html的值
const buttonElement = document.getElementById("submitBtn");
buttonElement.addEventListener("click", function () {
  const startDate = document.getElementById("startDate").value;
  const startTime = document.getElementById("startTime").value;
  const startDateTime = `${startDate}  ${startTime}`;
  //`${}`把變數的值變成字串

  const endDate = document.getElementById("endDate").value;
  const endTime = document.getElementById("endTime").value;
  const endDateTime = `${endDate}  ${endTime}`;
  var data = {
    name: document.getElementById("name").value,
    TimeOff: document.getElementById("Time-Off").value,
    priority: document.getElementById("priority").value,
    startDateTime: startDateTime, // 使用合并后的 startDateTime

    endDateTime: endDateTime,
    reason: document.getElementById("reason").value,
    agent: document.getElementById("agent").value,
  };
  console.log(data);
});

//做另一個送出紐 把物件變成文字的值
const TwobuttonElement = document.getElementById("submitBtn2");
TwobuttonElement.addEventListener("click", function () {
  var obj = document.getElementById("Time-Off");
  var index = obj.selectedIndex;
  var text = obj.options[index].text;
  const startDate = document.getElementById("startDate").value;
  const startTime = document.getElementById("startTime").value;
  const startDateTime = `${startDate} ${startTime}`;

  const endDate = document.getElementById("endDate").value;
  const endTime = document.getElementById("endTime").value;
  const endtDateTime = `${endDate} ${endTime}`;

  const name = document.getElementById("name").value;
  const Name = `${name}`;

  const agent = document.getElementById("agent").value;
  const Agent = `${agent}`;

  const reason = document.getElementById("reason").value;
  const Reason = `${reason}`;

  var Data = {
    startDateTime: startDateTime,
    endtDateTime: endtDateTime,
    Name: Name,
    text: text,
    Agent: Agent,
    Reason: reason,
  };

  var myJson = JSON.stringify(Data);
  localStorage.setItem("EIPData", myJson);
  // console.log(myJson);
  var JsEipData = JSON.parse(myJson);
  localStorage.getItem(JsEipData);
  console.log("JsEipData", JsEipData);
});
