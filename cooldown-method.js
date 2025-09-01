cooldown check nop 74 0C (jump if greater): strncpy() discord used GetTickCount64 QueryPerformanceCounter

cooldown is nop 75 0A (jump if zero): strcpy() discord used cooldown GetTickCount QueryPerformanceCounter

cooldown check nop 74 0C (jump if greater): strncpy() discord timer via GetTickCount64 QPC

delay bypass nop 75 08 (jnz): memcpy() discord cooldown handled by QueryPerfCounter

rate limit skip nop 74 06 (je): strcpy_s() discord timing uses GetTickCount

timer check nop 75 10 (jnz): strncpy_s() discord relies on QueryPerformanceFrequency
