enum Permission {
    Read = 1,   // 0001
    Write = 2,  // 0010
    Delete = 4, // 0100
    Create = 8  // 1000
};
// 组合权限
let p: Permission = Permission.Read | Permission.Write;
// 判断是否包含权限
function hasPermission(target:Permission, per:Permission) {
    return (target & per) === per;
}
// console.log(hasPermission(p, Permission.Write));
// 删除某个权限
p = p ^ Permission.Write;
console.log(hasPermission(p, Permission.Read));



