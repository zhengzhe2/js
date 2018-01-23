function startupADB() 
{
    const adb_devices = spawnSync('adb', ['devices']);
    var str = adb_devices.stdout.toString();
    if (-1 != str.indexOf('\t')) {
        var devicesName = str.substring(str.indexOf('\n') + 1, str.indexOf('\t'));
        var status = str.substring(str.indexOf('\t') + 1, str.lastIndexOf('\n') - 1);
        if ('device' == status) {
            console.log(devicesName + ':' + status);
            const adb_forward = spawnSync('adb', ['-s', devicesName, 'forward', 'tcp:6666', 'tcp:6666']);   
            return true;
        }
        else {
            console.log(devicesName + ':' + status);
            return false;
        }
    }
    else {
        console.log('no devices');
        return false;
    }
}