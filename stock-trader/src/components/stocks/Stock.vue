<template>
    <div class="col-sm-6 col-md-4">
        <div class="card text-black bg-light mb-3">
            <div class="card-header">
                <slot name="id"></slot>
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    <slot name="title"></slot>
                </h5>
                <p class="card-text">
                    <slot name="content"></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<style>
</style>
