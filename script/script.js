default_schedule = {
    "2-1" : {
        0 : ["수학", "선택", "영어", "한문", "선택", "선택", "자율"],
        1 : ["선택", "수학", "스포츠생활", "선택", "문학", "선택", "선택"],
        2 : ["선택", "문학", "수학", "영어", "한문", "동아리", "동아리"],
        3 : ["선택", "수학", "영어", "선택", "문학", "선택", "선택"],
        4 : ["선택", "선택", "문학", "음악", "선택", "영어", "선택"]
    },
    "2-2" : {
        0 : ["스포츠생활", "선택", "수학", "문학", "선택", "선택", "자율"],
        1 : ["선택", "문학", "수학", "선택", "영어", "선택", "선택"],
        2 : ["선택", "수학", "문학", "한문", "영어", "동아리", "동아리"],
        3 : ["선택", "영어", "한문", "선택", "음악", "선택", "선택"],
        4 : ["선택", "선택", "영어", "수학", "선택", "문학", "선택"]
    },
    "2-3" : {
        0 : ["문학", "선택", "스포츠생활", "영어", "선택", "선택", "자율"],
        1 : ["선택", "영어", "한문", "선택", "수학", "선택", "선택"],
        2 : ["선택", "영어", "미술", "수학", "문학", "동아리", "동아리"],
        3 : ["선택", "한문", "문학", "선택", "수학", "선택", "선택"],
        4 : ["선택", "선택", "영어", "문학", "선택", "수학", "선택"]
    },
    "2-4" : {
        0 : ["영어", "선택", "문학", "수학", "선택", "선택", "자율"],
        1 : ["선택", "스포츠생활", "문학", "선택", "한문", "선택", "선택"],
        2 : ["선택", "영어", "한문", "문학", "수학", "동아리", "동아리"],
        3 : ["선택", "문학", "수학", "선택", "영어", "선택", "선택"],
        4 : ["선택", "선택", "수학", "미술", "선택", "영어", "선택"]
    },
    "2-5" : {
        0 : ["수학", "B", "한문", "문학", "C", "A", "자율"],
        1 : ["D", "수학", "영어", "C", "문학", "B", "A"],
        2 : ["D", "수학", "영어", "문학", "스포츠생활", "동아리", "동아리"],
        3 : ["A", "영어", "문학", "B", "수학", "C", "D"],
        4 : ["C", "A", "미술", "영어", "B", "한문", "D"]
    },
    "2-6" : {
        0 : ["문학", "선택", "수학", "영어", "선택", "선택", "자율"],
        1 : ["선택", "한문", "문학", "선택", "수학", "선택", "선택"],
        2 : ["선택", "미술", "영어", "스포츠생활", "문학", "동아리", "동아리"],
        3 : ["선택", "수학", "영어", "선택", "문학", "선택", "선택"],
        4 : ["선택", "선택", "한문", "영어", "선택", "수학", "선택"]
    },
    "2-7" : {
        0 : ["영어", "선택", "문학", "한문", "선택", "선택", "자율"],
        1 : ["선택", "문학", "수학", "선택", "영어", "선택", "선택"],
        2 : ["선택", "문학", "수학", "미술", "영어", "동아리", "동아리"],
        3 : ["선택", "문학", "수학", "선택", "영어", "선택", "선택"],
        4 : ["선택", "선택", "수학", "한문", "선택", "스포츠생활", "선택"]
    },
}

function update_common_subject(class_num){
    html_element = {
        0 : document.getElementsByName("Mon"),
        1 : document.getElementsByName("Tue"),
        2 : document.getElementsByName("Wed"),
        3 : document.getElementsByName("Thu"),
        4 : document.getElementsByName("Fri")
    };

    for(day=0; day<5; day++){
        subject_data = default_schedule[class_num][day]
        for(i=0; i<7; i++){
            html_element[day][i].textContent = subject_data[i];
        }
    }
}

function update_opt_subject(type, subject_name){
    elements = document.getElementsByClassName(type);
    for(i=0; i<4; i++){
        elements[i].textContent = subject_name;
    }
    desc = document.getElementById(type);
    desc.innerHTML = type + " : " + subject_name;
}

function update_common_subject_from_localstorage(){
    class_num = localStorage.getItem("class");
    if (class_num == "None"){ return; }
    update_common_subject(class_num);
}

function update_a_subject_from_localstorage(){
    A = localStorage.getItem("A");
    if (A == "None"){ return; }
    update_opt_subject("A", A);
}

function update_b_subject_from_localstorage(){
    B = localStorage.getItem("B");
    if (B == "None"){ return; }
    update_opt_subject("B", B);
}

function update_c_subject_from_localstorage(){
    C = localStorage.getItem("C");
    if (C == "None"){ return; }
    update_opt_subject("C", C);
}

function update_d_subject_from_localstorage(){
    D = localStorage.getItem("D");
    if (D == "None"){ return; }
    update_opt_subject("D", D);
}

document.addEventListener('input', function(e){
    if (e.target.name == "class"){ // 반을 변경하면
        localStorage.setItem("class", e.target.value);
        if (e.target.value == "None") { return; }
        update_common_subject(e.target.value);
    }
    else if (e.target.name == "subject_A"){ // A 과목을 변경하면
        localStorage.setItem("A", e.target.value);
        update_opt_subject("A", e.target.value);
    }
    else if (e.target.name == "subject_B"){ // B 과목을 변경하면
        localStorage.setItem("B", e.target.value);
        update_opt_subject("B", e.target.value);
    }
    else if (e.target.name == "subject_C"){ // C 과목을 변경하면
        localStorage.setItem("C", e.target.value);
        update_opt_subject("C", e.target.value);
    }
    else if (e.target.name == "subject_D"){ // D 과목을 변경하면
        localStorage.setItem("D", e.target.value);
        update_opt_subject("D", e.target.value);
    }
})

update_common_subject_from_localstorage();
update_a_subject_from_localstorage();
update_b_subject_from_localstorage();
update_c_subject_from_localstorage();
update_d_subject_from_localstorage();
