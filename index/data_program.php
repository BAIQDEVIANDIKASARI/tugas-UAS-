<?php
session_start();
if ($_SESSION['status'] != "sudah_login") {
 //melakukan pengalihan
 header("location:../login/login.php");
}
include "../layout/header.php";
include "../config/koneksi.php";
?>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
 <div
 class="d-flex justify-content-between flex-wrap flex-md-nowrap alignitems-center pt-3 pb-2 mb-3 border-bottom">
 <h1 class="h2">Data program</h1>
 </div>
 <?php if (isset($_GET['pesan'])) : ?>
 <div class="alert alert-success" role="alert">
 <?php echo $_GET['pesan']; ?>
 </div>
 <?php endif; ?>
 <!-- <canvas class="my-4 w-100" id="myChart" width="900" height="380">
</canvas> -->
 <!-- <h4>Data Jadwal Kegiatan</h4> -->
 <a href="frm_tambah_program.php" class="btn btn-sm btn-primary">Tambah
Data</button></a>
 <br> <br>
 <div class="table-responsive">
 <table class="table table-striped table-bordered display nowrap"
id="example" style="width:100%">
 <thead class="table-light">
 <tr>
 <th scope="col">#</th>
 <th scope="col">id_program</th>
 <th scope="col">nama_program</th>
 <th scope="col">id_identitas</th>
 <th scope="col">aktiv</th>
 <th scope="col">Aksi</th>
 </tr>
 </thead>
 <tbody>
 <?php
 $no = 1;
 $query = mysqli_query($koneksi, "SELECT * FROM program");
 while ($rs = mysqli_fetch_assoc($query)) {
 ?>
 <tr>
 <td><?php echo $no; ?></td>
 <td><?php echo $rs['id_program']; ?></td>
 <td><?php echo $rs['nama_program']; ?></td>
 <td><?php echo $rs['id_identitas']; ?></td>
 <td><?php echo $rs['aktiv']; ?></td>
 <td>
 <a href="frm_ubah_data_program.php?id_program=<?=
  $rs['id_program']; ?>"
 class="btn btn-info btn-sm">Ubah</a>
 <a href="hapus_data_program.php?id_program=<?=
$rs['id_program']; ?>" class=" btn btn-danger
 btn-sm">Hapus</a>
 </td>
 </tr>
 <?php
 $no++;
 }
 ?>
 </tbody>
 </table>
 </div>
</main>
<?php
include "../layout/footer.php";
?>