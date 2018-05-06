<template>
        <div>
            Revisa Envios
            <NavBarAdmin :show="true"/>
            <AdminEnvio/>
        </div>
    </template>
    
    <script>
        import NavBarAdmin from '@/components/NavBarAdmin'
        import AdminEnvio from '@/components/AdminEnvio'
        export default {
            components: {
                NavBarAdmin,
                AdminEnvio
            },
            props: ['show']
        }
    </script>
    
    <style>
        
    </style>