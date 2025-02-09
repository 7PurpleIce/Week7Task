import styles from '../app.module.css'

export const SearchAndSort = ({ searchTerm, setSearchTerm, isSortEnabled, setIsSortEnabled }) => {
    return (
      <div className={styles.searchSection}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tasks"
          className={styles.input}
        />
        <button
          onClick={() => setIsSortEnabled(!isSortEnabled)}
          className={styles.button}
        >
          {isSortEnabled ? 'Disable Sorting' : 'Sort Alphabetically'}
        </button>
      </div>
    );
};