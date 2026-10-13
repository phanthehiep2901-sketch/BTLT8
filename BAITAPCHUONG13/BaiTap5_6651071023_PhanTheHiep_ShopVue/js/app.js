/* ==========================================================================
   BÀI 5: SHOP PHỤ KIỆN ĐIỆN THOẠI MINI - VUE.JS 3 (GLOBAL BUILD CDN)
   
   YÊU CẦU 11 (GHI CHÚ SO SÁNH REACTIVITY):
   - Nếu dùng Vanilla JS: Mỗi lần người dùng thêm/xóa giỏ hàng hay gõ tìm kiếm, 
     chúng ta phải viết code thủ công querySelector(), gán innerHTML, tính toán số 
     lượng và gán lại nội dung DOM rất rườm rà, dễ phát sinh lỗi đồng bộ.
   - Khi dùng Vue.js: Tận dụng cơ chế Reactivity (UI = function of Data). 
     Ta chỉ cần thay đổi mảng cart hoặc biến tuKhoa, Vue sẽ TỰ ĐỘNG cập nhật 
     toàn bộ các vị trí UI liên quan (Header, Danh sách sản phẩm, Giỏ hàng Aside) 
     ngay lập tức mà KHÔNG CẦN THAO TÁC DOM THỦ CÔNG.
   ========================================================================== */

const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        // --- DATA STATE ---
        
        // Từ khóa tìm kiếm (kết nối 2 chiều v-model)
        const tuKhoa = ref('');

        // Mảng mẩu dữ liệu tối thiểu 8 sản phẩm phụ kiện điện thoại
        const products = ref([
            { id: 1, ten: 'ELECTRIC BLUE CASE', gia: 250000, hinhAnh: '../images/case-blue.jpg' },
            { id: 2, ten: 'ELECTRIC BLUE CASE (SILVER)', gia: 250000, hinhAnh: '../images/case-silver.png' },
            { id: 3, ten: 'WIRELESS CHARGER PAD', gia: 250000, hinhAnh: '../images/wireless-charger.avif' },
            { id: 4, ten: 'ACTIVE TWS EARBUDS', gia: 250000, hinhAnh: '../images/tws-earbuds.jpg' },
            { id: 5, ten: 'ELECTRIC BLUE CASE (BLACK)', gia: 250000, hinhAnh: '../images/case-black.jpg' },
            { id: 6, ten: 'WIRELESS CHARGER PAD FAST', gia: 250000, hinhAnh: '../images/wireless-charger.jpg' },
            { id: 7, ten: 'ACTIVE TWS EARBUDS PRO', gia: 250000, hinhAnh: '../images/tws-earbuds.jpg' },
            { id: 8, ten: 'FAST CHARGING CABLE', gia: 250000, hinhAnh: '../images/cable.jpg' }
        ]);

        // Mảng chứa các sản phẩm được người dùng thêm vào giỏ hàng
        const cart = ref([]);

        // --- COMPUTED PROPERTIES ---

        // 1. Lọc sản phẩm theo từ khóa (không phân biệt hoa/thường)
        const danhSachLoc = computed(() => {
            if (!tuKhoa.value.trim()) return products.value;
            return products.value.filter(sp => 
                sp.ten.toLowerCase().includes(tuKhoa.value.toLowerCase().trim())
            );
        });

        // 2. Tính tổng số lượng mặt hàng trong giỏ (hiển thị trên Badge Header)
        const tongSoLuongCart = computed(() => {
            return cart.value.reduce((sum, item) => sum + item.soLuong, 0);
        });

        // 3. Tính tổng số tiền trong giỏ hàng (hiển thị ở Aside)
        const tongTien = computed(() => {
            return cart.value.reduce((sum, item) => sum + (item.gia * item.soLuong), 0);
        });

        // --- METHODS ---

        // Method 1: Thêm sản phẩm vào giỏ hàng
        const themVaoGio = (sanPham) => {
            // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
            const viTri = cart.value.findIndex(item => item.id === sanPham.id);
            if (viTri !== -1) {
                // Nếu có rồi thì tăng số lượng
                cart.value[viTri].soLuong++;
            } else {
                // Nếu chưa có thì thêm mới vào mảng
                cart.value.push({
                    ...sanPham,
                    soLuong: 1
                });
            }
        };

        // Method 2: Xóa sản phẩm khỏi giỏ hàng theo chỉ số index
        const xoaKhoiGio = (index) => {
            cart.value.splice(index, 1);
        };

        // Trả về dữ liệu và hàm để Template HTML sử dụng
        return {
            tuKhoa,
            products,
            cart,
            danhSachLoc,
            tongSoLuongCart,
            tongTien,
            themVaoGio,
            xoaKhoiGio
        };
    }
}).mount('#app');