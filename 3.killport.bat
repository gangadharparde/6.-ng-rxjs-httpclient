set /P port="Enter port : "
echo showing process running with port %port%

netstat -ano|findstr "PID :%port%"

set /P pid="Enter PID to kill : "

taskkill /pid %pid% /f

set /P exit="Press any key to exit..."