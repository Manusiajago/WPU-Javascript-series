// belajar object method pada javascript

const Mahasiswa = {
    nama: 'Rizky',
    umur: 20,
    ips: [3.00, 3.10, 3.20, 3.30],
    alamat: {
        jalan: 'Jl. Merdeka',
        kota: 'Bandung',
        provinsi: 'Jawa Barat'
    },
    hitungIpk: function () {
        const total = this.ips.reduce((acc, curr) => {
            return acc + curr;
        }, 0);

        return total / this.ips.length;
    }
}

// mengubah nilai di properti object
Mahasiswa.nama = 'Parto';


const saya = {
    nama: 'Egal',
    umur: 24,
    hobi: 'coding',
    sayHello: function () {
        return `Halo nama saya ${this.nama} umur saya ${this.umur} hobi saya ${this.hobi}`
    }
}

const user = {
    name: 'dicoding',
    lastName: 'Indonesia',
    age: 9
}

const { name, lastName, age } = user;


console.log(saya.sayHello())
console.log(`Ipk ${Mahasiswa.nama} adalah ${Mahasiswa.hitungIpk()}`);
console.log(name, lastName, age);