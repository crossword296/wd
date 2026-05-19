var txt = new Array();
txt[0]="./2/index.html";
txt[1]="./3/index.html";
txt[2]="./4/index.html";
txt[3]="./5/index.html";
txt[4]="./6/index.html";
txt[5]="./7/index.html";
txt[6]="./8/index.html";
txt[7]="./12/index.html";
txt[8]="./100k/5/index.html";
txt[9]="./100k/h/index.html";

mmax = 10; //メッセージ行数
txtno = Math.floor(Math.random() * mmax);
location.href=txt[txtno];
