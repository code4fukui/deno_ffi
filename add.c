#include <stdio.h>
#include "deno_ffi.h"

EXPORT int add(int a, int b) {
    return a + b;
}
