<?php

namespace App\Http\Controllers;

use App\Models\ChiTietHD;
use App\Models\ChiTietSP;
use Illuminate\Http\Request;
use App\Models\HoaDon;
use App\Models\DatHang;
use App\Models\KhuyenMai;
use App\Models\NguoiDung;
use Illuminate\Support\Facades\Log;
use Spatie\Backtrace\Arguments\ReducedArgument\TruncatedReducedArgument;

class HoaDonController extends Controller
{
    // use HttpResponses;



    public function GetCTHDHoaDon($id)
    {
        $hoadon = ChiTietHD::where('MaHD', $id)->get();


        foreach ($hoadon as $key => $value) {
            $MaSP = $value->MaSP;
            $sanpham = ChiTietSP::where('id', $MaSP)->first();
            $value['TenSP'] = $sanpham->TenSP;
            $value['PhanLoai'] = $sanpham->MaPL;
            $value['HinhAnh'] = $sanpham->HinhAnh;
        }
        return response()->json([
            'status' => true,
            'hoadon' => $hoadon,
        ], 200);
    }

    public function GetHoaDon()
    {
        $hoadon1 = HoaDon::all();

        foreach ($hoadon1 as $key => $value) {
            $idDatHang = $value['id'];
            $dathang1 = DatHang::where('MaHD', $idDatHang)->first();
            // $dathang = json_decode($dathang1, true, JSON_UNESCAPED_UNICODE);
            // Log::info($dathang); 
            if ($dathang1 !== null) {
                // Biến $dathang1 có giá trị, bạn có thể an tâm đọc thuộc tính TrangThai
                $value['TrangThai'] = $dathang1->TrangThai;
                // Các thao tác khác
            } else {
               
                // Biến $dathang1 là null, bạn có thể xử lý tùy ý, ví dụ:
                $value['TrangThai'] = "Chưa xác nhận";
                
                // Hoặc có thể bỏ qua gán giá trị và để nó giữ giá trị mặc định (tuỳ thuộc vào ý đồ của bạn)
            }
            //$value['TrangThai'] = $dathang1->TrangThai;
            
            
            $maKH = $value['MaKH'];
            $khuyenmai = KhuyenMai::where('id', $value['MaKM'])->first();

            $khachhang = NguoiDung::where('id', $maKH)->first();
            $value['TenKM'] = isset($khuyenmai->TenKM) ? $khuyenmai->TenKM : null;
            $value['hoten'] = $khachhang->hoten;
            $value['sdt'] = $khachhang->sdt;
            $value['diachi'] = $khachhang->diachi;
        }
        // Log::info($hoadon1);

        return response()->json([
            'status' => true,
            'hoadon' => $hoadon1,
        ], 200);
    }
}