<template>
    <div id="WarningModalftblack" class="modal modal-edu-general Customwidth-popup-WarningModal PrimaryModal-bgcolor fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-close-area modal-close-df">
                    <a class="close" data-dismiss="modal" href="#"><i class="fas fa-times"></i></a>
                </div>
                <div class="modal-body">
                    <span class="educate-icon educate-warning modal-check-pro information-icon-pro fas fa-exclamation-triangle"></span>
                    <h2>Uyarı!</h2>
                    <p>{{content}}</p>
                </div>
                <div class="modal-footer ">
                    <a data-dismiss="modal" style="background-color: #65b12d;margin-left: 0px" href="#">Tamam</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['content']
    }
</script>

<style scoped>

</style>