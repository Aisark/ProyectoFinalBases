<template>
        <div>
            CRUD Productos
            <NavBarAdmin :show="true"/>
            <AdminProducto/>
        </div>
    </template>
    
    <script>
        import NavBarAdmin from '@/components/NavBarAdmin'
        import AdminProducto from '@/components/AdminProducto'
        export default {
            components: {
                NavBarAdmin,
                AdminProducto
            },
            props: ['show']
        }
    </script>
    
    <style>
        
    </style>