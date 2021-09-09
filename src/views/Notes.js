import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';
import { useForm } from 'react-hook-form';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = ({ title, content }) => {
    if (title && content) {
      dispatch(addNote({ title, content }));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleAddNote)}>
        <FormWrapper>
          <StyledFormField label="Title" name="title" id="title" {...register('title', { required: true })} />
          {errors.title && <span>Login is required</span>}

          <StyledFormField isTextarea label="Content" name="content" id="content" {...register('content', { required: true })} />
          {errors.content && <span>Password is required</span>}

          <Button onClick={handleAddNote}>Add</Button>
        </FormWrapper>
      </form>

      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
