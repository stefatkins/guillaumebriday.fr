import React from 'react'

export default () => {
  return (
    <form>
      <p className="text-sm">
        Votre adresse de messagerie ne sera pas publiée.<br />
        Les champs obligatoires sont indiqués avec <span className="text-red">*</span>.
      </p>

      <div className="my-4 w-1/2 inline-block pr-2">
        <label htmlFor="name">Nom <span className="text-red">*</span></label>
        <input className="text-input no-outline mt-1" name="name" id="name" type="text" required />
      </div>

      <div className="my-4 w-1/2 inline-block pl-2">
        <label htmlFor="email">Email <span className="text-red">*</span></label>
        <input className="text-input no-outline mt-1" name="email" id="email" type="email" required />
      </div>

      <div className="my-4">
        <label htmlFor="content">Commentaire <span className="text-red">*</span></label>
        <textarea className="text-input no-outline mt-1" name="content" id="content" rows="8" required></textarea>
      </div>

      <div className="flex justify-end">
        <button className="bg-white border border-indigo hover:bg-indigo hover:text-white cursor-pointer text-indigo shadow py-2 px-4 rounded w-full sm:w-auto" type="submit">
          Laisser un commentaire
        </button>
      </div>
    </form>
  )
}
