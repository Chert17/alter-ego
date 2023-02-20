import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { setAuth } from '../../redux/auth/authSlice';
import { useAppDispatch } from '../../redux/hooks';

type Inputs = {
  username: string;
  password: string;
};

const Form = () => {
  const { t } = useTranslation();

  const [isReg, setIsReg] = useState(false);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(setAuth({ isAuth: true, userName: data.username }));
    reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  return (
    <Box maxWidth={400} margin="0 auto">
      <Typography
        variant="h4"
        component="p"
        textAlign="center"
        marginBottom={2}
      >
        {isReg ? t('register') : t('login')}
      </Typography>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <TextField
          {...register('username', {
            required: true,
            minLength: {
              value: 3,
              message: 'Name should be minimum 6 characters long',
            },
          })}
          type="text"
          variant="outlined"
          label={t('name')}
          color={errors.username ? 'error' : 'primary'}
          fullWidth
        />
        {errors.username && (
          <Typography variant="caption" color="error">
            {errors.username.message}
          </Typography>
        )}

        <FormControl variant="outlined" sx={{ m: 1, width: '100%' }}>
          <InputLabel color={errors.password ? 'error' : 'primary'}>
            {t('password')}
          </InputLabel>
          <OutlinedInput
            fullWidth
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Password should be minimum 6 characters long',
              },
            })}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={t('password')}
            color={errors.password ? 'error' : 'primary'}
          />
          {errors.password && (
            <Typography variant="caption" color="error">
              {errors.password.message}
            </Typography>
          )}
        </FormControl>

        <Button
          type="submit"
          variant="outlined"
          style={{ width: 150, margin: '12px auto' }}
          disabled={!isValid}
        >
          {isReg ? t('register') : t('login')}
        </Button>
        <Button
          onClick={() => setIsReg(!isReg)}
          size="small"
          style={{ margin: '0 auto' }}
        >
          {isReg ? t('sign-in') : t('sign-up')}
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
