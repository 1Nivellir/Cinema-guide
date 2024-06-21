<template>
	<VeeForm class="form" @submit="submitForm" v-slot="{ errors }">
		<legend v-if="legend" class="form__legend">{{ legend }}</legend>
		<fieldset class="form__fieldset">
			<div
				class="form__input-box"
				v-for="{ name, as, type, placeholder, icon, ...attrs } in fieldsets"
				:key="name"
			>
				<VeeField
					ref="input"
					:name="name"
					:type="type"
					:as="as"
					:placeholder="placeholder"
					class="form__input"
					:class="{ form__error: errors[name] }"
					:value="attrs.value"
					v-bind="attrs"
				/>
				<CommonIcon
					v-if="icon"
					:iconName="icon"
					:fill="errors[name] ? '#FF7575' : '#00000066'"
					class="form__icon"
				/>
			</div>
		</fieldset>
		<span v-for="error in formErrors" :key="error" class="form__error-msg">
			{{ error }}
		</span>
		<button type="submit" class="form__btn">{{ buttonName }}</button>
	</VeeForm>
</template>

<script lang="ts" setup>
const emit = defineEmits(['submitForm'])
defineProps<{
	legend?: string
	fieldsets: Field[]
	buttonName?: string
	formErrors: string[] | null
}>()
const submitForm = (values: any) => {
	if (values.passwordConfirm) {
		delete values.passwordConfirm
	}
	emit('submitForm', values)
}
</script>

<style scoped lang="scss">
.form {
	max-width: 340px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 24px;

	&__fieldset {
		padding: 0;
		border: none;
		display: flex;
		flex-direction: column;
		row-gap: 12px;
	}

	&__input-box {
		position: relative;
	}
	&__icon {
		position: absolute;
		top: 50%;
		left: 12px;
		transform: translateY(-50%);
	}

	&__legend {
		color: rgb(0, 0, 0);
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
		text-align: center;
	}

	&__input {
		border: 1px solid rgba(0, 0, 0, 0.4);
		border-radius: 8px;
		background: rgb(255, 255, 255);
		transition: border 0.3s ease-in-out;
		outline: transparent;
		padding: 13px 13px 13px 50px;
		width: 100%;

		&:focus {
			outline: none;
			// border: 1px solid rgb(106, 93, 193);
		}

		&::placeholder {
			color: rgba(0, 0, 0, 0.4);
			font-size: 18px;
			font-weight: 400;
			line-height: 24px;
		}
	}

	&__error {
		border: 1px solid rgb(255, 117, 117);
	}

	&__error-msg {
		color: rgb(255, 0, 0);
		font-size: 12px;
		font-weight: 400;
		line-height: 16px;
	}
	&__btn {
		cursor: pointer;
		border: none;
		border-radius: 28px;
		padding: 16px 42px;
		background: rgb(106, 93, 193);
		color: rgb(255, 255, 255);
		font-size: 18px;
		font-weight: 700;
		line-height: 24px;
	}
}
.is-invalid {
	border: 1px solid rgb(255, 0, 0);
}
</style>
